# GNU Radio Sphinx theme

This is the custom Sphinx theme used for the
GNU Radio Sphinx-based documentation located
at **TODO**. 

It was inspired by [PyTorch's](https://github.com/pytorch/pytorch_sphinx_theme)
and [TYPO3's](https://github.com/TYPO3-Documentation/sphinx_typo3_theme)
Sphinx themes.

To develop, you need to install:

    1. PDM
    2. Bun
    3. Grunt

I will add more documentation on developing
when I am able!

## To use with GNU Radio documentation

Clone this package and install with:

```
pip install .
```

Then you should just be able to use it as a
Sphinx theme in your `conf.py` file:

```
# In conf.py

...
html_theme = "gr_sphinx_theme"
...
```

## To see what it should look like

There are some helpful pages explaining
some of the things you can do with Sphinx
in this repo's `docs` folder. You should 
be able to clone the repository, install
as described above, and run `make html`, 
then just open `docs/_build/index.html`
to see a rendered page.
