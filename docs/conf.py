import os
import sys

sys.path.append(os.path.abspath(".."))

from gr_sphinx_theme import __version__ as version

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = "GNU Radio Sphinx Theme"
copyright = "2024, Bailey Campbell"
author = "Bailey Campbell"

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ["sphinxcontrib.mermaid", "sphinx_tabs.tabs"]

templates_path = ["_templates"]
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]


# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = "gr_sphinx_theme"
html_theme_path = ["../"]
html_static_path = ["_static"]
