
.. include:: /Includes.rst.txt


=========================
versionadded & friends
=========================

Read about the `versionadded directive`__ in the `Sphinx docs`__.

__ https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#directive-versionadded
__ https://www.sphinx-doc.org/en/master/

Examples
========

versionadded
   .. versionadded:: 3.9.1.0

   .. versionadded:: 3.9.2.0
      The `foo` parameter

versionchanged
   .. versionchanged:: 3.9.1.0

   .. versionchanged:: 3.9.1.0
      `foo` changed to `bar`


deprecated
   .. deprecated:: 3.9.1.0
      Use function `baz` instead.

   .. deprecated:: 3.9.1.0

.. seealso::

   Something of interest
      Visit https://gnuradio.org first.

      Woo GNU Radio!


There’s also a “short form” allowed that looks like this:

.. seealso:: https://gnuradio.org


