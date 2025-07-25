---
title: Git and GitHub
description: How to use git and GitHub to manage our projects
hide_table_of_contents: true
sidebar_position: 2
---

## Git
We use a tool called *git* for version control. This allows us to take "snapshots" of our code at a given time and save it for development documentation, reference, and backups. Git is a very powerful tool, but can be confusing and difficult to master. It also allows for simultaneous development across peers which is very helpful when multiple people are working on the same project.

#### Repos
A project that is tracked by git is called a *repository* or frequently shortened to *repo*. A repo is the file structure containing all the "code" used for the project. It also contains all git tracking information. It needs to know about all the [commits](#commits) and [branches](#branches) being made by all developers on the project to correctly update your local copy. Each programming project should live in its own repo. All of your robot projects are their own repo. We also several other repos for generic projects like this website!

#### Commits
The snapshots of your repo at a given moment of development is called a commits. Commits are a unique point in development that show the state of all tracked files in your repo. They are uniquely assigned a SHA, which is a long string of alpha-numeric characters. Something like `2c37172285088188fc6e7f100bc204fc4d6c446f` or `7a02abb2d621edc25a11c5869d9e6cb792c92580`. As you can see those are definitely unique, but not very helpful if we are trying to figure how what state the repo was in for that given commit. Luckily our buddy [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds) had that in mind and allowed us to attach a "commit message" to describe what the state of the repo was in for that given commit.

Good version control practice is to commit frequently, but not after every line of code. Think about the big picture. Did I just complete a small development task? Did I just fix a bug? Did I just create the structure for a new feature? If so you should probably commit. The idea is that your commits act as breadcrumbs and could show your development process. 500+ line commits don't help anyone and can make it more difficult to figure out what you actually changed. A good rule of thumb is if you can't summarize your changes in less than 52 characters, your commit is too big.

#### Branches


#### Merge


## GitHub
