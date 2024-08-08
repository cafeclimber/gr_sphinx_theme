.. include:: /Includes.rst.txt
.. highlight:: rst
.. index:: mermaid


================
Mermaid Diagrams
================

.. mermaid::

   sequenceDiagram
      participant Alice
      participant Bob
      Alice->John: Hello John, how are you?
      loop Healthcheck
          John->John: Fight against hypochondria
      end
      Note right of John: Rational thoughts <br/>prevail...
      John-->Alice: Great!
      John->Bob: How about you?
      Bob-->John: Jolly good!

.. mermaid::
    
    ---
    title: Simple sample
    ---
    stateDiagram-v2
        [*] --> Still
        Still --> [*]

        Still --> Moving
        Moving --> Still
        Moving --> Crash
        Crash --> [*]
