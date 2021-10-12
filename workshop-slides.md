---
author: Zack
title: Vim Workshop
date: 2021-10-10
---

```
 __        __   _                          _
 \ \      / /__| | ___ ___  _ __ ___   ___| |
  \ \ /\ / / _ \ |/ __/ _ \| '_ ` _ \ / _ \ |
   \ V  V /  __/ | (_| (_) | | | | | |  __/_|
    \_/\_/ \___|_|\___\___/|_| |_| |_|\___(_)

```

# Welcome to the VIM Workshop!

## Outline

- Introduction to editors
- Modes in VIM
- Intermediate navigation in VIM
- Practice!
- Alternatives
- What's next?

## Markdown Link

- This markdown is available at `https://github.com/nhzaci/VimWorkshopSlides2021`

---

```
   ____            _            _
  / ___|___  _ __ | |_ _____  _| |_
 | |   / _ \| '_ \| __/ _ \ \/ / __|
 | |__| (_) | | | | ||  __/>  <| |_
  \____\___/|_| |_|\__\___/_/\_\\__|

```

# What is VIM (ViIMproved)?

| V   | IM       |
| --- | -------- |
| Vi  | IMproved |

- Vi is a screen-oriented text editor built for Unix Systems
- Works on very very old hardware and allows for quick text editing
- Originally written by Bill Joy in 1976
- VIM improved on it by adding extensibility for plugins and more features!

## Philosophy of VIM

- An editor should work at the same speed as the speed at which you think

## What is NeoVim?

- NeoVim is a fork of VIM that strives to improve maintainability and extensibility of Vim
- Popular plugins:
  - Autocompletion with CoC (Conquer of Completion)
  - Asynchronous support (useful for autocomplete)

---

```
  ____        _     ___   _                                    ___ ____  _____
 | __ ) _   _| |_  |_ _| | | _____   _____   _ __ ___  _   _  |_ _|  _ \| ____|
 |  _ \| | | | __|  | |  | |/ _ \ \ / / _ \ | '_ ` _ \| | | |  | || | | |  _|
 | |_) | |_| | |_   | |  | | (_) \ V /  __/ | | | | | | |_| |  | || |_| | |___ _ _ _
 |____/ \__,_|\__| |___| |_|\___/ \_/ \___| |_| |_| |_|\__, | |___|____/|_____(_|_|_)
                                                       |___/
```

# Fret not!

- You can get vim running in your preferred IDE as well!

# Visual Studio Code

- Vim extension which emulates Vim
- NeoVim extension which uses actual NeoVim on your VSC

# IntelliJ

- IdeaVim plugin which is an emulation of Vim

---

```
  _____                      _        _   _
 | ____|_  ___ __   ___  ___| |_ __ _| |_(_) ___  _ __  ___
 |  _| \ \/ / '_ \ / _ \/ __| __/ _` | __| |/ _ \| '_ \/ __|
 | |___ >  <| |_) |  __/ (__| || (_| | |_| | (_) | | | \__ \
 |_____/_/\_\ .__/ \___|\___|\__\__,_|\__|_|\___/|_| |_|___/
            |_|
```

# What should you expect after today

- This workshop serves to show you what's out there
- You won't be able to learn all the commands in 1 day
- I urge you to take it slow, use one or two commands each week until it becomes muscle memory
- Move onto the next one after you are done!
- This is how to get better!

---

```
  __  __           _
 |  \/  | ___   __| | ___  ___
 | |\/| |/ _ \ / _` |/ _ \/ __|
 | |  | | (_) | (_| |  __/\__ \
 |_|  |_|\___/ \__,_|\___||___/

```

# There are 6 basic modes in VIM that you need to know about

| Mode     | Description                       | Entering                     |
| -------- | --------------------------------- | ---------------------------- |
| Normal   | Navigate around                   | `<esc>`                      |
| Visual   | For selecting text                | `v`, `V`, <ctrl-v>           |
| Insert   | For inserting text                | `i`, `a`, `o`, `I`, `A`, `O` |
| Command  | For using vim commands            | `:`                          |
| Terminal | For using running unix commands   | `:terminal`, `:ter`          |
| Ex       | For running multiple vim commands | `:q`                         |

(There are 7 more modes but they are mostly extensions of these 6 basic modes)

---

```

 _   _                            _   __  __           _
| \ | |                          | | |  \/  |         | |
|  \| | ___  _ __ _ __ ___   __ _| | | \  / | ___   __| | ___
| . ` |/ _ \| '__| '_ ` _ \ / _` | | | |\/| |/ _ \ / _` |/ _ \
| |\  | (_) | |  | | | | | | (_| | | | |  | | (_) | (_| |  __/
|_| \_|\___/|_|  |_| |_| |_|\__,_|_| |_|  |_|\___/ \__,_|\___|



```

# Basic Navigation from Normal Mode

| Type              | Description                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| Basic             | `hjkl` for left, down, up, right                                                                     |
| Words             | `w` (next word), `b` (beginning of word), `e` end of word                                            |
| Lines             | `0` (beginning of line), `^` (first non-whitespace character), `$` (end of line)                     |
| Screen            | `H` (top of screen), `M` (middle of screen), `L` (bottom of screen)                                  |
| File              | `gg` (top of file), `G` (end of file)                                                                |
| Line Numbers      | `:{number}` or `{number}G`                                                                           |
| Misc              | `%` corresponding item, ie. start / end braces / brackets                                            |
| Repeating N times | `{N}{command}` repeats command N times, e.g. `10j` moves down 10 times                               |
| Find in line      | `f`, `F`, move forward / backward ONTO character; `t`, `T`, move forward / backward BEFORE character |
| Search            | `/{regex}` to search, `n`, `N` to move move to next / prev search result                             |

---

```

 __      ___                 _   __  __           _
 \ \    / (_)               | | |  \/  |         | |
  \ \  / / _ ___ _   _  __ _| | | \  / | ___   __| | ___
   \ \/ / | / __| | | |/ _` | | | |\/| |/ _ \ / _` |/ _ \
    \  /  | \__ \ |_| | (_| | | | |  | | (_) | (_| |  __/
     \/   |_|___/\__,_|\__,_|_| |_|  |_|\___/ \__,_|\___|



```

# Entering visual mode

| Key      | Function            |
| -------- | ------------------- |
| v        | Select by character |
| V        | Select by line      |
| <ctrl-v> | Select by block     |

- Navigate around in visual mode like you would in normal mode

---

```

  _____                     _     __  __           _
 |_   _|                   | |   |  \/  |         | |
   | |  _ __  ___  ___ _ __| |_  | \  / | ___   __| | ___
   | | | '_ \/ __|/ _ \ '__| __| | |\/| |/ _ \ / _` |/ _ \
  _| |_| | | \__ \  __/ |  | |_  | |  | | (_) | (_| |  __/
 |_____|_| |_|___/\___|_|   \__| |_|  |_|\___/ \__,_|\___|


```

# Enter insert mode from normal mode

| Key | Function                                                   |
| --- | ---------------------------------------------------------- |
| i   | Enter insert mode before start of current character        |
| I   | Enter insert mode at the start of the line                 |
| a   | Enter insert mode after start of current character         |
| A   | Enter insert mode at the end of the line                   |
| o   | Enter insert mode, creating a new line after current line  |
| O   | Enter insert mode, creating a new line before current line |

---

```

   _____                                          _   __  __           _
  / ____|                                        | | |  \/  |         | |
 | |     ___  _ __ ___  _ __ ___   __ _ _ __   __| | | \  / | ___   __| | ___
 | |    / _ \| '_ ` _ \| '_ ` _ \ / _` | '_ \ / _` | | |\/| |/ _ \ / _` |/ _ \
 | |___| (_) | | | | | | | | | | | (_| | | | | (_| | | |  | | (_) | (_| |  __/
  \_____\___/|_| |_| |_|_| |_| |_|\__,_|_| |_|\__,_| |_|  |_|\___/ \__,_|\___|



```

# Enter command mode with `:` from normal mode

| Key            | Function                      |
| -------------- | ----------------------------- |
| w              | save                          |
| q              | quit                          |
| vsp            | vertical split                |
| sp             | horizontal split              |
| ter            | open a terminal               |
| enew           | create a new empty file       |
| e <filepath>   | open a file path in vim       |
| sav <filepath> | save current file to filepath |

---

```
  ___       _                               _ _       _
 |_ _|_ __ | |_ ___ _ __ _ __ ___   ___  __| (_) __ _| |_ ___
  | || '_ \| __/ _ \ '__| '_ ` _ \ / _ \/ _` | |/ _` | __/ _ \
  | || | | | ||  __/ |  | | | | | |  __/ (_| | | (_| | ||  __/
 |___|_| |_|\__\___|_|  |_| |_| |_|\___|\__,_|_|\__,_|\__\___|

```

| Action                 | Command                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| Search and replace all | `:%s/{search_regex}/{replace_regex}/g`                                                          |
| Do last action         | `.` operator repeats whatever you just did                                                      |
| Undo / Redo            | `u` to undo, `<ctrl-r>` to redo                                                                 |
| Delete                 | `dd` deletes one line and `d{motion}` to delete, ie. `d10j` to delete 10 lines                  |
| Copying                | `yy` copies one line and `y{motion}` to delete, ie. `d10j` to delete 10 lines                   |
| Pasting                | `p` pastes below current line, `P` pastes on current line                                       |
| Macros                 | `q{bind_macro_to_characer}` to start recording, `{N}@{macro_bound_character}` to replay N times |
| Go to definition       | `gd` to go to definition, `<ctrl-o>` to go back to last file opened                             |

---

```
  ____                 _   _
 |  _ \ _ __ __ _  ___| |_(_) ___ ___
 | |_) | '__/ _` |/ __| __| |/ __/ _ \
 |  __/| | | (_| | (__| |_| | (_|  __/
 |_|   |_|  \__,_|\___|\__|_|\___\___|

```

- Let's practice now!
- Git clone this repo: `https://github.com/rminehan/vim-kata`

---

```
 __        ___           _   _                       _  ___
 \ \      / / |__   __ _| |_( )___   _ __   _____  _| ||__ \
  \ \ /\ / /| '_ \ / _` | __|// __| | '_ \ / _ \ \/ / __|/ /
   \ V  V / | | | | (_| | |_  \__ \ | | | |  __/>  <| |_|_|
    \_/\_/  |_| |_|\__,_|\__| |___/ |_| |_|\___/_/\_\\__(_)

```

# Look up YouTube videos

- I watched this series, "Vim As Your Editor" by "The Primeagen" to get started in VIM
- Continue working through the vim katas to get better

---

```
  _____ _                 _     __   __
 |_   _| |__   __ _ _ __ | | __ \ \ / /__  _   _
   | | | '_ \ / _` | '_ \| |/ /  \ V / _ \| | | |
   | | | | | | (_| | | | |   <    | | (_) | |_| |
   |_| |_| |_|\__,_|_| |_|_|\_\   |_|\___/ \__,_|

```
