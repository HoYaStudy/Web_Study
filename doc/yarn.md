# Yarn v1.22.4

`Yarn` is a package manager for your code.

## Installation

Using a single package manager across your system has always been a problem. To be stable, installs need to be run with the same package manager version across environments, otherwise there's a risk we introduce accidental breaking changes between versions - after all, that's why the concept of lockfile was introduced in the first place! And with `Yarn` being in a sense your very first project dependency, it should make sense to "lock it" as well.

For this reason, `Yarn 2` and later are meant to be managed on a by-project basis. Don't worry, little will change! Just make sure to first install the global `Yarn` binary that we will use to spawn the local ones:

### on Windows (Global)

> $ npm install -g yarn

### on Windows (Per-Project)

1. Follow the global install instructions
2. Move into project folder
    > $ cd ~/path/to/project
3. Run the folowing command
    > $ yarn policies set-version berry
    >
    > $ yarn set version berry

## Usage

### Show help

> $ yarn help

### Show current version

> $ yarn --version

### Updating to the latest versions

> $ yarn set version latest

### Starting a new project

> $ yarn init

### Installing all the dependencies

> $ yarn
>
> $ yarn install

### Adding a dependency

> $ yarn add \<package>

### Adding a dependency to different categories of dependencies

> $ yarn add \<package> --dev

> $ yarn add \<package> --peer

### Upgrading a dependency

> $ yarn up \<package>

### Removing a dependency

> $ yarn remove \<package>
