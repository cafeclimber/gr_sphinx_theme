.. include:: /Includes.rst.txt

.. _Codeblocks:

==================
Codeblocks
==================

Basic examples
==============

.. highlight:: shell

List files, 'let see'::

   ls

Show more::

   ls -al

Or short::

   ls -1


Code-block with line numbers
============================

.. code-block:: rst
   :caption: Example of 'contents' directive
   :linenos:
   :emphasize-lines: 2,3
   :force:

   This is an example block. Next two line have 'emphasis' background color.
   With another line.
   And a third one.

   .. code-block:: rst
      :caption: Example of 'contents' directive
      :linenos:
      :emphasize-lines: 2,3
      :force:

      This is an example block.
      With another line.
      And a third one.


Image and code-block without caption
====================================

.. image:: ../images/gnuradio.png

.. code-block:: none

   .
   ├── gnuradio.png
   ├── gnuradio/
   .



Image and code-block with caption
=================================

.. image:: ../images/gnuradio.png

.. code-block:: none
   :caption: Generated extension with boilerplate code

   .
   ├── gnuradio.png
   ├── gnuradio/
   .
