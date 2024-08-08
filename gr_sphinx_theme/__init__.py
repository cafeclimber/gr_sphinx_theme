from __future__ import annotations

from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from typing import Any

    from sphinx.application import Sphinx

from pathlib import Path

__version__ = "0.1.0"


def setup(app: Sphinx) -> dict[str, Any]:
    """Register the theme with Sphinx."""
    here = Path(__file__).parent.resolve()
    app.add_html_theme("gr_sphinx_theme", theme_path=str(here))

    return {}
