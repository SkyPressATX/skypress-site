# SkyPress.io Development Repository
This repo holds the build and local development files for the SkyPress website

*v0.3.0-alpha*

## Requires:

* Yarn
* Global @angular/cli
* Composer
* Docker
* Docker Compose

*This document places <example> snippets within it's code. These <examples> are what you will need to changed with your own custom values*

## Clone Repo

To get started, clone this repo into a new directory. Once cloned, all other commands should be ran from within the `skypress` directory

```
git clone https://github.com/SkyPressATX/skypress-site skypress
cd skypress
git checkout -b <my new branch name>
```

## Setup local WordPress with Docker

Included is a basic `docker-compose.yml` that will setup WordPress, MySQL, and PHPMyAdmin

```
docker-compose up -d
```

We include `-d` to in order to detach this command from your terminal.

Once all containers are up, navigate to `http://localhost:8080` in your web browser. You should see the famous 5 Minute install screen. Install WordPress like normal.

*If you are running Linux, you might need to change the file/folder permissions after your docker containers are setup*

```
sudo find wordpress -type d -exec chmod 775 {} \; && sudo find wordpress -type f -exec chmod 664 {} \;
```

## Activate Plugin and Theme

The `skypress-api` and `skypress-theme` need to be activated now. Use the proper steps in `http://localhost:8080/wp-admin` to do so.

## Watch Angular changes, build when done

As you make changes to the Angular piece, you can use the Angular CLI to hot reload your browser

```
cd angular/skypress-theme
ng serve
```

This spins up **Only** the Angular application at `http://localhost:4200` _note the different port from our docker container_

Once you've got your changes sorted out, build the Angular app

```
yarn build
```

**-- OR --**

```
ng build --prod
```

_`yarn build` simply fires off `ng build --prod`_

This will place the transpiled `.js` files and the `assets` directory in `wordpress/wp-content/themes/skypress-theme/src/`

## Commit and Push changes

Once built, you can push your changes back to the Dev repo on Github

```
git add . --all
git commit -am '<My Message>'
git push origin <my new branch name>
```
