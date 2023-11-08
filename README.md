# Vite by Steve Kinney

- [Vite by Steve Kinney](#vite-by-steve-kinney)
  - [Lessons](#lessons)
  - [Notes](#notes)

## Lessons
- [X] ~~*Lesson 01*~~ [2023-11-08]
- [ ] Lesson 02
- [ ] Lesson 03
- [ ] Lesson 04
- [ ] Lesson 05
- [ ] Lesson 06

## Notes

- Lesson 01
  - Vite uses Rollup for production (build-time tooling)
  - Enable MacOS key repeat
    - `defaults write NSGlobalDomain ApplePressAndHoldEnabled -bool false` 
  - `<script type="module" src="..."`
    - `module` scripts automatically load after DOM content has loaded
  - `import('module_file_path')` returns a promise that can be used to dynamically load modules on demand
- Lesson 02