.. include:: /Includes.rst.txt
.. index:: highlighting

============
Highlighting
============

Examples taken from https://highlightjs.org/static/demo/

If highlighting is missing it may be due to the fact
that the pygments lexer has detected a syntax error.
Code needs to be syntactically correct.


Bash
====

.. highlight:: bash

::

   #!/bin/bash

   ###### BEGIN CONFIG
   ACCEPTED_HOSTS="/root/.hag_accepted.conf"
   BE_VERBOSE=false
   ###### END CONFIG

   if [ "$UID" -ne 0 ]
   then
    echo "Superuser rights is required"
    echo 'Printing the # sign'
    exit 2
   fi

   if test $# -eq 0
   then
   elif test [ $1 == 'start' ]
   else
   fi

   genApacheConf(){
    if [[ "$2" = "www" ]]
    then
     full_domain=$1
    else
     full_domain=$2.$1
    fi
    host_root="${APACHE_HOME_DIR}$1/$2/$(title)"
    echo -e "# Host $1/$2 :"
   }



.. code-block:: text

   ###
   CoffeeScript Compiler v1.2.0
   Released under the MIT License
   ###

   OPERATOR = /// ^ (
   ?: [-=]>             # function
   ) ///


C++
===

.. highlight:: c++

::

   #include <iostream>
   #define IABS(x) ((x) < 0 ? -(x) : (x))

   int main(int argc, char *argv[]) {

     /* An annoying "Hello World" example */
     for (auto i = 0; i < 0xFFFF; i++)
       cout << "Hello, World!" << endl;

     char c = '\n';
     unordered_map <string, vector<string> > m;
     m["key"] = "\\\\"; // this is an error

     return -2e3 + 12l;
   }


CSS
===

.. highlight:: css

::

   @media screen and (-webkit-min-device-pixel-ratio: 0) {
     body:first-of-type pre::after {
       content: 'highlight: ' attr(class);
     }
     body {
       background: linear-gradient(45deg, blue, red);
     }
   }

   @import url('print.css');
   @page:right {
    margin: 1cm 2cm 1.3cm 4cm;
   }

   @font-face {
     font-family: Chunkfive; src: url('Chunkfive.otf');
   }

   div.text,
   #content,
   li[lang=ru] {
     font: Tahoma, Chunkfive, sans-serif;
     background: url('hatch.png') /* wtf? */;  color: #F0F0F0 !important;
     width: 100%;
   }



Diff
====

.. highlight:: diff

::

   Index: languages/ini.js
   ===================================================================
   --- languages/ini.js    (revision 199)
   +++ languages/ini.js    (revision 200)
   @@ -1,8 +1,7 @@
    hljs.LANGUAGES.ini =
    {
      case_insensitive: true,
   -  defaultMode:
   -  {
   +  defaultMode: {
        contains: ['comment', 'title', 'setting'],
        illegal: '[^\\s]'
      },

   *** /path/to/original timestamp
   --- /path/to/new      timestamp
   ***************
   *** 1,3 ****
   --- 1,9 ----
   + This is an important
   + notice! It should
   + therefore be located at
   + the beginning of this
   + document!

   ! compress the size of the
   ! changes.

     It is important to spell


Http
====

.. highlight:: http

::

   POST /task?id=1 HTTP/1.1
   Host: example.org
   Content-Type: application/json; charset=utf-8
   Content-Length: 19

   {"status": "ok", "extended": true}


Javascript
==========

.. highlight:: javascript

::

   var makeNoise = function() {
     console.log("Pling!");
   };

   makeNoise();
   // → Pling!

   var power = function(base, exponent) {
     var result = 1;
     for (var count = 0; count < exponent; count++)
       result *= base;
     return result;
   };

   console.log(power(2, 10));
   // → 1024


JSON
====

.. highlight:: json

::

   [
     {
       "title": "apples",
       "count": [12000, 20000],
       "description": {"text": "...", "sensitive": false}
     },
     {
       "title": "oranges",
       "count": [17500, null],
       "description": {"text": "...", "sensitive": false}
     }
   ]


Makefile
========

.. highlight:: makefile

::

   # Makefile

   BUILDDIR      = _build
   EXTRAS       ?= $(BUILDDIR)/extras

   .PHONY: main clean

   main:
      @echo "Building main facility..."
      build_main $(BUILDDIR)

   clean:
      rm -rf $(BUILDDIR)/*


Markdown
========

.. highlight:: markdown

Let's see what happens with lexer `markdown`::

   # hello world

   you can write text [with links](https://example.org) inline or [link references][1].

   * one _thing_ has *em*phasis
   * two __things__ are **bold**

   [1]: https://example.org

   ---

   hello world
   ===========

   <this_is inline="xml"></this_is>

   > markdown is so cool

       so are code segments

   1. one thing (yeah!)
   2. two thing `i can write code`, and `more` wipee!


Python
======

.. highlight:: python

::

   @requires_authorization
   def somefunc(param1='', param2=0):
       r'''A docstring'''
       if param1 > param2: # interesting
           print 'Gre\'ater'
       return (param2 - param1 + 1 + 0b10l) or None

   class SomeClass:
       pass

::

   >>> message = '''interpreter
   ... prompt'''


Html
====

.. highlight:: html

::

   <!DOCTYPE html>
   <title>Title</title>

   <style>body {width: 500px;}</style>

   <script type="application/javascript">
     function $init() {return true;}
   </script>

   <body>
     <p checked class="title" id='title'>Title</p>
     <!-- here goes the rest of the page -->
   </body>

