---
title: "Sexp7"
description: "Sexp7 - A fork of godot-s7-scheme serving as a GDExtension implementation guide for Goli"
date: 2025-12-22
draft: false
type: docs
weight: 1
icon: "fas fa-flask"
---

# Sexp7

Sexp7 is a fork of [godot-s7-scheme](https://github.com/bamboo/godot-s7-scheme) that serves as an implementation introduction into how GDExtension works.

## Overview

Godot integration for the s7 Scheme interpreter. s7 interpreters can be added to scenes as Scheme nodes which can load and evaluate code. The Scheme code has access to the Godot API through a simple interface.

## Purpose

This project acts as a pre-prototype to guide the actual implementation of Goli. By studying and modifying the Sexp7 codebase, we can:

- Understand the integration points between Godot and Scheme interpreters
- Learn best practices for GDExtension development
- Identify potential challenges and solutions for Lisp integration
- Prototype features before implementing them in the full Goli system

## Development Status

Very experimental but a lot of fun to play with. Use it at your own risk.

## Documentation Sections

- [API Reference](api-reference/) - Godot integration syntax and API access
- [Building](building/) - Building and running Sexp7 projects  
- [Roadmap](roadmap/) - Future development plans

## Related Projects

- [Sexp7](https://github.com/godot-lisp/sexp7) - The fork repository with GDExtension research and prototyping
- [Goli](/) - The main Godot Lisp implementation
- [godot-s7-scheme](https://github.com/bamboo/godot-s7-scheme) - The original project this is forked from