.. include:: /Includes.rst.txt
.. highlight:: rst

.. _Inline-code-and-text-roles:

==========================
Inline code and text roles
==========================

Use `Sphinx interpreted text roles
<http://www.sphinx-doc.org/en/master/usage/restructuredtext/roles.html>`__ to
explicitly specify what kind of text / code (= textrole) it is. This shows the
semantics and in the output there may be a a special coloring or highlighting:

Using text roles
================

See also: `Standard Sphinx interpreted text roles
<http://www.sphinx-doc.org/en/master/usage/restructuredtext/roles.html#other-semantic-markup>`__

================ ================================================= ============================================ 
Role             Source                                            Output                                       
================ ================================================= ============================================ 
abbr             ``:abbr:`LIFO (last-in, first-out)```             :abbr:`LIFO (last-in, first-out)`            
code             ``:code:`result = (1 + x) * 32```                 :code:`result = (1 + x) * 32`
command          ``:command:`rm```                                 :command:`rm`                                
dfn              ``:dfn:`something```                              :dfn:`something`                             
file             ``:file:`/etc/passwd```                           :file:`/etc/passwd`
guilabel         ``:guilabel:`&Cancel```,                          :guilabel:`&Cancel`,                         
                 ``:guilabel:`O&k```,                              :guilabel:`O&k`,
                 ``:guilabel:`&Reset```,                           :guilabel:`&Reset`,
                 ``:guilabel:`F&&Q```                              :guilabel:`F&&Q`
kbd              ``Press :kbd:`ctrl` + :kbd:`s```                  Press :kbd:`ctrl` + :kbd:`s`                 
mailheader       ``:mailheader:`Content-Type```                    :mailheader:`Content-Type`                   
term             ``:term:`CMS```, ``:term:`cms```,                 :term:`CMS`, :term:`cms`,                    
                 ``:term:`magic number```,                         :term:`magic number`,
                 ``:term:`term text role```                        :term:`term text role`
ref              ``:ref:`Inline-Code```                            :ref:`Inline-code-and-text-roles`            
================ ================================================= ============================================ 


Standard Docutils interpreted text roles
----------------------------------------

See also: `Standard Docutils interpreted text roles
<http://docutils.sourceforge.net/docs/ref/rst/roles.html#standard-roles>`__

================== ================================================= ============================================ 
Role               Source                                            Output                                       
================== ================================================= ============================================ 
emphasis           ``:emphasis:`text`, *text*``                      :emphasis:`text`, *text*
literal            ``:literal:`\ \ abc```                            :literal:`\ \ abc`
literal            ``:literal:`text`, ''text''`` (backticks!)        :literal:`text`, ``text``
math               ``:math:`A_\text{c} = (\pi/4) d^2```              :math:`A_\text{c} = (\pi/4) d^2`             
rfc, rfc-reference ``:RFC:`2822```                                   :RFC:`2822`
strong             ``:strong:`text`, **text**``                      :strong:`text`, **text**                     
subscript          ``:subscript:`subscripted```                      :subscript:`subscripted`
superscript        ``:superscript:`superscripted```                  :superscript:`superscripted`
t, title-reference ``:t:`Design Patterns```                          :t:`Design Patterns`                         
================== ================================================= ============================================ 


A glossary and the :term: textrole
==================================

*Glossary* to define some demo terms

This is a small demo glossary to allow the `:term:` text role in the above
examples.

.. glossary::

   CMS
      Content management system

   magic number
      A magic number is a magic number.

   term text role
      The `:term:` texrole is used to create crossreferences to terms of the
      glossary.

*Example:* "Refer to our glossary to find out about :term:`CMS` or
:term:`magic number` or :term:`term text role`".


Standard Sphinx and Docutils Textroles
======================================

- This is how ``:code:`result = (1 + x) * 32``` looks like: :code:`result = (1 + x) * 32`

- "code" also is the **default** *text-role*. So ```result = (1 + x) * 32``` looks the
  same `result = (1 + x) * 32` as ``:code:`result = (1 + x) * 32```.

- This is how ``:file:`/etc/passwd``` looks like: :file:`/etc/passwd`

