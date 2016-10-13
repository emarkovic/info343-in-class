# INFO 343 In-Class Code

We will use this repo for all code we write in class. To begin, **Fork this repo** into your own account using the "Fork" button above.

## On a Lab Machine?

Tell git who you are:

```bash
git config --global user.name "Your Name"
git config --global user.email your-netid@uw.edu
```

Clone your forked repo to your machine:

```bash
git clone https://your-forked-in-class-repo-url
```

Add a remote to my original repo and pull any updates I've made to the `master` branch:

```bash
git remote add upstream https://github.com/info343-a16/info343-in-class
git pull upstream master
```

This may put you into a command-line text editor to approve the merge commit message. On the lab machines this editor will be `vim`. To accept the default commit message and exit, hit `Esc` and type `:wq` (for "write and quit").

## On Your Own Laptop?

Get into the directory where you already cloned your repo and execute `git status` to see if you have any uncommitted changes. If you do, add and commit those changes.

If you haven't yet added a remote to my original repo, do that (only need to do this once):

```bash
git remote add upstream https://github.com/info343-a16/info343-in-class
```

Pull updates that I've made to my `master` branch:

```bash
git pull upstream master
```

This may put you into a command-line text editor to approve the merge commit message. By default this will be `vim`--to exit, hit `Esc` and type `:wq` (for "write and quit"). If you changed the editor to `nano`, hit `Ctrl+X` to exit (listed in the menu shown at the bottom).
