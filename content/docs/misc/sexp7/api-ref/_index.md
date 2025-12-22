---
title: "API Reference"
description: "Godot integration syntax and API access for Sexp7"
date: 2025-12-22
draft: false
type: docs
weight: 1
---

# API Reference

The Scheme code has access to the Godot API via a simple interface (syntax is still in flux):

## Core Concepts

- The Scheme Godot node, which serves as an entry point into the scene model, is exposed as the `*node*` constant
- Godot nodes can be accessed through their relative path to `*node*` via the `$` macro, e.g. `($ Sprite2D)`
- Properties can be read via applicable object syntax
- Applicable syntax can also read nested properties and call methods
- Properties can be set via generalized `set!` syntax
- Scheme code can connect to signals via `connect!`

## Syntax Examples

### Reading Properties

```scheme
;; Read the owner property of the enclosing node
(*node* 'owner)

;; Read nested properties
(*node* 'owner 'name)
```

### Calling Methods

```scheme
;; Method calls with applicable syntax
(*node* 'owner '(get_child 0) 'name)

;; Method calls with dynamic arguments
(*node* `(get_child ,child_index))

;; Explicit method call syntax
(! (*node* 'owner) 'get_child 0)
```

### Setting Properties

```scheme
;; Set properties via generalized set! syntax
(set! (*node* 'owner '(get_child 0) 'name) "Deeply Nested set!")

;; Set button text
(set! (button 'text)
  (! text 'insert (text '(length)) suffix))
```

### Signal Connections

```scheme
;; Connect signals to symbols, lambdas, and procedures
(connect! button 'pressed 'symbol-handler)
(connect! button 'pressed (lambda () (button-append! "λ")))
(connect! button 'pressed function-handler)
```

## Complete Example

```scheme
(begin
  ;; Godot objects are exposed as applicable objects.
  (define button (*node* 'owner '(get_child 1)))

  (define (button-append! suffix)
    (let ((text (button 'text)))
      ;; Two main ways of calling Godot methods:
      ;; 1. (! <obj> <method symbol> &<args>)
      ;; 2. (<obj> '(<method symbol> &<args>))
      (set! (button 'text)
        (! text 'insert (text '(length)) suffix))))

  (define (function-handler)
    (button-append! "!"))

  (define (symbol-handler)
    (button-append! "'"))

  ;; Signals can be connected to symbols, lambdas and arbitrary procedures.
  ;; Symbols provide late binding for REPL-based development.
  (connect! button 'pressed 'symbol-handler)
  (connect! button 'pressed (lambda () (button-append! "λ")))
  (connect! button 'pressed function-handler))
```