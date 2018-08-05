# SS-Octopus Theme

A Dark theme for [Visual Studio Code](http://code.visualstudio.com/).

## Color Palette

![color-palette](images/color-palette.png)

## Supports

* Typescript
* ES2015+
* Node
* HTML
* SCSS
* CSS
* JSON
* Dockerfile
* Ruby
* Go
* Nginx
* yml

_SS-Octopus was written by me, for me.  As such, I don't expect this theme to work for everybody or, perhaps, anybody._

## Examples

### Javascript

#### Angular

![Angular Example](images/angular-example.png)

#### Typescript

![Typescript Example](images/typescript-example.png)

#### ES2015+

![ES2015+ Example](images/es-2015-plus-example.png)

#### Node

![Node Example](images/node-example.png)

### SCSS

![SCSS Example](images/scss-example.png)

### Ruby

![Ruby Example](images/ruby-example.png)

### Go

![Go Example](images/go-example.png)

### JSON

![json Example](images/json-example.png)

### YML

![yml Example](images/yml-example.png)

## Installation

1) Go to Extensions
1) Search for ss-octopus
1) Install
1) Restart Visual Studio Code (or click Reload window)
1) Go to Preferences → Color Theme and choose SS-Octopus

**Enjoy!**

## Selection Styles

Coloring a selection in VSCode is tricky.  I've done my best to make the selection styles work with the theme, however, it's not perfect.  If you wish to make some tweaks of your own, feel free to modify the following `workbench.colorCustomizations` within your `settings.json` file.

```json
"workbench.colorCustomizations": {
  "editor.findMatchBackground": "#ffffff01",
  "editor.findMatchBorder": "#9735c566",
  "editor.findMatchHighlightBackground": "#4e315355",
  "editor.findMatchHighlightBorder": "#f700ff22",
  "editor.selectionBackground": "#0b5827aa",
  "editor.selectionHighlightBackground": "#0b582777",
  "editor.selectionHighlightBorder": "#5aca7699",
  "editor.wordHighlightBackground": "#00ffff11",
  "editor.wordHighlightBorder": "#5aca7699",
  "editor.wordHighlightStrongBackground": "#00ffff40",
  "editor.wordHighlightStrongBorder": "#5aca7699"
}
```

## The Squishy Parts

### Motivation

I wanted to make a theme that satisfied some of the pain points I've run into with existing themes.  The goals for SS-Octopus are:

* Support the languages I frequently work with
* Highlight mostly the important parts of the code
* Allow for easy updating by organizing theme by color, not by scope

### Why ss-octopus

Two (bad) reasons:
1) For some reason I like to name some of my projects as if they were ships, prefixed with `ss` and named after some creature of the sea
1) I previously wrote an unpublished theme for the [Atom](https://atom.io/) editor that had the same name

Essentially, *SS-Octopus* is a nonsensical name that makes me giggle softly when I see it because I know it doesn't mean anything.

### Inspirations

* This whole adventure started after I read the `Motivation` section of the [Alabaster Theme](https://github.com/tonsky/vscode-theme-alabaster) readme.
* Example files from [Night Owl](https://github.com/sdras/night-owl-vscode-theme)
  * `angular.component.ts`
  * `react.js`
  * `ruby.rb`
  * `yml.yml`

## License

[MIT License](LICENSE)
