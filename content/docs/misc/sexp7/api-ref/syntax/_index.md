---
title: "Syntax Reference"
description: "Detailed syntax reference for Sexp7 Godot integration"
date: 2025-12-22
draft: false
type: docs
weight: 1
---

# Syntax Reference

This page provides detailed reference for the Sexp7 syntax used to interact with Godot.

## Node Access

### The `*node*` Constant

The Scheme Godot node is exposed as the `*node*` constant, serving as an entry point into the scene model.

```scheme
;; Access the current node
*node*

;; Access the owner of the current node
(*node* 'owner)
```

### Path-based Access

Use the `$` macro for relative path access:

```scheme
;; Access a Sprite2D child
($ Sprite2D)

;; Access nested children
($ Sprite2D AnimationPlayer)
```

## Property Operations

### Reading Properties

Properties can be read using applicable object syntax:

```scheme
;; Read a simple property
(button 'text)

;; Read nested properties
(*node* 'owner 'name)

;; Read properties with method calls
(button '(get_size) 'x)
```

### Setting Properties

Use generalized `set!` syntax to modify properties:

```scheme
;; Set a simple property
(set! (button 'text) "Hello World")

;; Set nested properties
(set! (*node* 'owner 'name) "New Name")

;; Set properties with complex paths
(set! (button '(get_child 0) 'position) (vector 100 200))
```

## Method Calls

### Applicable Syntax

Methods can be called using object syntax:

```scheme
;; Call a method
(button '(set_text "New Text"))

;; Call with multiple arguments
(animation-player '(play "walk" -1 0.5 false))

;; Nested method calls
(*node* 'owner '(get_child 0) '(set_visible true))
```

### Explicit Method Syntax

For clarity, you can also use the `!` macro:

```scheme
;; Explicit method call
(! button 'set_text "New Text")

;; With the ! macro
(! animation-player 'play "walk" -1 0.5 false)
```

## Signal Connections

### Basic Connections

Connect signals using `connect!`:

```scheme
;; Connect to a symbol
(connect! button 'pressed 'my-handler)

;; Connect to a lambda
(connect! button 'pressed (lambda () (print "Pressed!")))

;; Connect to a defined procedure
(define (handle-press)
  (print "Button was pressed"))

(connect! button 'pressed handle-press)
```

### Advanced Signal Handling

Signals support late binding with symbols:

```scheme
;; Symbol-based connection allows redefinition
(define (button-handler-1)
  (set! (label 'text) "First handler"))

(define (button-handler-2)
  (set! (label 'text) "Second handler"))

(connect! button 'pressed 'button-handler-1)

;; Later, you can redefine the symbol
(set! button-handler-1 button-handler-2)
;; Now pressing the button will call the new handler
```

## Dynamic Code

### Quasiquote for Dynamic Access

Use quasiquote for dynamic property/method access:

```scheme
(define child-index 2)

;; Dynamic child access
(*node* `(get_child ,child-index))

;; Dynamic method calls
(define method-name 'set_visible)
(button `(,method-name true))
```

### Runtime Evaluation

Scheme code can be evaluated dynamically:

```scheme
;; Evaluate Scheme code from strings
(eval-string "(set! (button 'text) \"Dynamic!\")")

;; Compile and run code
(define code '(lambda () (print "Hello from compiled code!")))
((eval code)))
```