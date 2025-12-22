---
title: "Building"
description: "Building and running Sexp7 projects"
date: 2025-12-22
draft: false
type: docs
weight: 2
---

# Building

## Prerequisites

Make sure to update all git submodules:

```bash
git submodule update --init
```

## Building the Project

Build and launch the demo project with:

```bash
make run
```

Or more explicitly via:

```bash
scons && godot -e --path demo
```

## Android Target

Build the Android target with:

```bash
make android
```

Or more explicitly via:

```bash
scons platform=android target=template_debug
```

Make sure `ANDROID_HOME` is set in your environment.

## Development Workflow

1. Update submodules
2. Build with `scons`
3. Run with `godot -e --path demo`
4. For Android development, use the Android build target