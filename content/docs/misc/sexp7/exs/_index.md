---
title: "Code Examples"
description: "Practical examples of Sexp7 Godot integration"
date: 2025-12-22
draft: false
type: docs
weight: 2
---

{{< glitz-code-example language="scheme" title="Hello World in Sexp7" >}}
;; Define a simple function
(define (hello-sexp7)
  "Prints a greeting message from Sexp7"
  (print "Hello, Sexp7 World!"))

;; Call the function
(hello-sexp7)

---

This example demonstrates:

- **Function Definition**: Using `define` to create a named function
- **Documentation Strings**: The string after the parameter list serves as documentation
- **Basic Output**: Using `print` to display text to the console
- **Function Calls**: Executing the defined function

The function `hello-sexp7` takes no parameters and simply prints a greeting message from Sexp7.
{{< /glitz-code-example >}}

{{< glitz-code-example language="scheme" title="Button Counter with State Management" >}}
;; Define UI elements
(define button (*node* 'owner '(get_child 1)))
(define label (*node* 'owner '(get_child 2)))

;; State variable
(define click-count 0)

;; Helper function to update display
(define (update-display)
  (set! (label 'text)
        (string-append "Clicks: "
                      (number->string click-count))))

;; Button press handlers
(define (increment-counter)
  (set! click-count (+ click-count 1))
  (update-display))

;; Connect signals
(connect! button 'pressed 'increment-counter)

;; Initialize display
(update-display)

---

This example demonstrates:

- **UI Element Access**: Using `*node*` and `get_child` to access scene nodes
- **State Management**: Maintaining a counter variable across function calls
- **String Manipulation**: Converting numbers to strings and concatenating text
- **Signal Connections**: Connecting button press events to handler functions
- **Dynamic Updates**: Updating UI elements in response to user interactions

The code creates a simple counter that increments each time a button is pressed, displaying the current count in a label.
{{< /glitz-code-example >}}

{{< glitz-code-example language="scheme" title="Animation Control Functions" >}}
;; Get animation player
(define anim-player ($ AnimationPlayer))

;; Animation control functions
(define (play-animation name)
  (! anim-player 'play name))

(define (stop-animation)
  (! anim-player 'stop))

(define (set-animation-speed speed)
  (set! (anim-player 'playback_speed) speed))

;; Example usage
(play-animation "walk")
(set-animation-speed 2.0)

---

This example demonstrates:

- **Node Selection**: Using `$` to find nodes by type in the scene tree
- **Animation Playback**: Controlling AnimationPlayer nodes programmatically
- **Property Modification**: Changing animation playback speed dynamically
- **Function Abstraction**: Creating reusable functions for common animation tasks

The code provides a simple API for controlling animations, allowing you to play specific animations, stop playback, and adjust speed.
{{< /glitz-code-example >}}

{{< glitz-code-example language="scheme" title="Creating Nodes at Runtime" >}}
;; Create a new sprite node
(define new-sprite (! *node* 'owner 'create_node "Sprite"))

;; Set sprite properties
(set! (new-sprite 'texture)
      (load "res://icon.png"))

(set! (new-sprite 'position)
      (vector 100 100))

;; Add to scene
(! *node* 'owner 'add_child new-sprite)

;; Create and attach a script
(define script (! new-sprite 'create_script))
(! script 'set_source_code "
(begin
  (define rotation-speed 1.0)
  (define (process delta)
    (set! (*node* 'rotation)
          (+ (*node* 'rotation)
             (* rotation-speed delta))))
  (connect! *node* 'process 'process))")
(! new-sprite 'set_script script)

---

This example demonstrates:

- **Runtime Node Creation**: Creating new nodes programmatically during execution
- **Resource Loading**: Loading textures and other assets from the filesystem
- **Property Setting**: Configuring node properties like position and texture
- **Scene Tree Manipulation**: Adding nodes to the scene hierarchy
- **Dynamic Scripting**: Creating and attaching scripts to nodes at runtime
- **Process Loop Integration**: Connecting to Godot's process signal for continuous updates

The code creates a new sprite with a texture, positions it, and gives it a rotating animation by attaching a dynamically created script.
{{< /glitz-code-example >}}

{{< glitz-code-example language="scheme" title="Responding to User Input" >}}
;; Input handling
(define (handle-input event)
  (cond
    ;; Keyboard input
    ((and (! event 'is_pressed)
          (= (! event 'keycode) KEY_SPACE))
     (jump-action))

    ;; Mouse input
    ((= (! event 'type) INPUT_EVENT_MOUSE_BUTTON)
     (if (! event 'pressed)
         (mouse-click (! event 'position))))

    ;; Joystick input
    ((= (! event 'type) INPUT_EVENT_JOYSTICK_BUTTON)
     (joystick-button (! event 'button_index)))))

;; Connect to input events
(connect! *node* 'input 'handle-input)

---

This example demonstrates:

- **Event-Driven Programming**: Responding to various input events from different sources
- **Conditional Logic**: Using `cond` to handle different types of input events
- **Event Properties**: Accessing event data like key codes, positions, and button indices
- **Signal Connections**: Connecting to Godot's input event system
- **Multi-Input Support**: Handling keyboard, mouse, and joystick inputs in one function

The code creates a unified input handler that can respond to keyboard presses (like spacebar for jumping), mouse clicks, and joystick button presses.
{{< /glitz-code-example >}}

{{< glitz-code-example language="scheme" title="Scheduled Actions with Timers" >}}
;; Create a timer
(define timer (! *node* 'owner 'create_node "Timer"))

;; Configure timer
(set! (timer 'wait_time) 2.0)
(set! (timer 'one_shot) false)
(! timer 'start)

;; Timer callback
(define (timer-tick)
  (print "Timer fired!")
  ;; Perform periodic action
  (update-game-state))

;; Connect timer signal
(connect! timer 'timeout 'timer-tick)

;; Add timer to scene
(! *node* 'owner 'add_child timer)

---

This example demonstrates:

- **Timer Creation**: Creating Timer nodes programmatically
- **Timer Configuration**: Setting wait time and one-shot vs repeating behavior
- **Signal Handling**: Connecting to timer timeout signals
- **Periodic Execution**: Running code at regular intervals
- **Scene Management**: Adding timers to the scene tree for automatic cleanup

The code creates a repeating timer that fires every 2 seconds, calling a function to update game state periodically.
{{< /glitz-code-example >}}

{{< glitz-code-example language="scheme" title="Loading and Managing Resources" >}}
;; Load resources
(define texture (load "res://sprites/player.png"))
(define sound (load "res://sounds/jump.wav"))
(define scene (load "res://scenes/level.tscn"))

;; Create nodes with loaded resources
(define sprite (! *node* 'owner 'create_node "Sprite"))
(set! (sprite 'texture) texture)
(! *node* 'owner 'add_child sprite)

;; Play sound effect
(define audio-player (! *node* 'owner 'create_node "AudioStreamPlayer"))
(set! (audio-player 'stream) sound)
(! audio-player 'play)
(! *node* 'owner 'add_child audio-player)

;; Instantiate scene
(define level-instance (! scene 'instantiate))
(! *node* 'owner 'add_child level-instance)

---

This example demonstrates:

- **Resource Loading**: Loading various types of assets (textures, audio, scenes)
- **Node Instantiation**: Creating nodes and assigning loaded resources
- **Audio Playback**: Playing sound effects through AudioStreamPlayer nodes
- **Scene Instantiation**: Loading and instantiating pre-made scenes
- **Asset Management**: Organizing and using different types of game assets

The code loads a texture for a sprite, plays a sound effect, and instantiates a level scene, showing how to work with different resource types in Godot.
{{< /glitz-code-example >}}