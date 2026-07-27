"""Create a public resume copy with the phone number permanently removed."""

from __future__ import annotations

import argparse
from pathlib import Path

import pymupdf as fitz


PHONE = "+91-9342857466"
CONTACT_TEXT = "palanivig12@gmail.com | LinkedIn | GitHub"
EMAIL = "mailto:palanivig12@gmail.com"
LINKEDIN = "https://linkedin.com/in/vigneshwaran2312"
GITHUB = "https://github.com/EDITH-v"
FONT_NAME = "Times-Roman"
FONT_SIZE = 10.5


def text_width(text: str) -> float:
    return fitz.get_text_length(text, fontname=FONT_NAME, fontsize=FONT_SIZE)


def add_link(page: fitz.Page, label: str, start_x: float, baseline_y: float, uri: str) -> None:
    prefix = CONTACT_TEXT.split(label, maxsplit=1)[0]
    x0 = start_x + text_width(prefix)
    x1 = x0 + text_width(label)
    rect = fitz.Rect(x0, baseline_y - FONT_SIZE, x1, baseline_y + 2)
    page.insert_link({"kind": fitz.LINK_URI, "from": rect, "uri": uri})


def redact_resume(source: Path, destination: Path) -> None:
    document = fitz.open(source)
    page = document[0]

    phone_hits = page.search_for(PHONE)
    if len(phone_hits) != 1:
        raise RuntimeError(f"Expected one phone number, found {len(phone_hits)}")

    contact_line = fitz.Rect(120, 59, page.rect.width - 120, 77)
    page.add_redact_annot(contact_line, fill=(1, 1, 1))
    page.apply_redactions()

    for link in page.get_links():
        if link.get("from", fitz.Rect()).intersects(contact_line):
            page.delete_link(link)

    baseline_y = 71.5
    start_x = (page.rect.width - text_width(CONTACT_TEXT)) / 2
    page.insert_text(
        (start_x, baseline_y),
        CONTACT_TEXT,
        fontname=FONT_NAME,
        fontsize=FONT_SIZE,
        color=(0, 0, 0),
    )

    add_link(page, "palanivig12@gmail.com", start_x, baseline_y, EMAIL)
    add_link(page, "LinkedIn", start_x, baseline_y, LINKEDIN)
    add_link(page, "GitHub", start_x, baseline_y, GITHUB)

    destination.parent.mkdir(parents=True, exist_ok=True)
    document.save(destination, garbage=4, deflate=True, clean=True)
    document.close()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("destination", type=Path)
    args = parser.parse_args()
    redact_resume(args.source, args.destination)


if __name__ == "__main__":
    main()
