const fs = require('fs')
let data = `
fly-icon-heart1

 fly-icon-star

 fly-icon-star-o

 fly-icon-thumbs-o-up

 fly-icon-thumbs-o-down

 fly-icon-star-half

 fly-icon-heart-o

 fly-icon-smile-o

 fly-icon-frown-o

 fly-icon-meh-o

 fly-icon-star-half-empty

 fly-icon-star-half-full

 fly-icon-star-half-o

 fly-icon-3d_rotation

 fly-icon-ac_unit

 fly-icon-schedule

 fly-icon-add

 fly-icon-add_location

 fly-icon-exposure_neg_1

 fly-icon-exposure_plus_1

 fly-icon-activity

 fly-icon-airplay

 fly-icon-alert-circle

 fly-icon-alert-octagon

 fly-icon-alert-triangle

 fly-icon-align-center

 fly-icon-align-justify

 fly-icon-align-left

 fly-icon-align-right

 fly-icon-anchor

 fly-icon-aperture

 fly-icon-archive

 fly-icon-arrow-down

 fly-icon-arrow-down-circle

 fly-icon-arrow-down-left

 fly-icon-arrow-down-right

 fly-icon-arrow-left

 fly-icon-arrow-left-circle

 fly-icon-arrow-right

 fly-icon-arrow-right-circle

 fly-icon-arrow-up

 fly-icon-arrow-up-circle

 fly-icon-arrow-up-left

 fly-icon-arrow-up-right

 fly-icon-at-sign

 fly-icon-award

 fly-icon-bar-chart

 fly-icon-bar-chart-2

 fly-icon-battery

 fly-icon-battery-charging

 fly-icon-bell

 fly-icon-bell-off

 fly-icon-bluetooth

 fly-icon-bold

 fly-icon-book

 fly-icon-book-open

 fly-icon-bookmark

 fly-icon-box

 fly-icon-briefcase

 fly-icon-calendar

 fly-icon-camera

 fly-icon-camera-off

 fly-icon-cast

 fly-icon-check

 fly-icon-check-circle

 fly-icon-check-square

 fly-icon-chevron-down

 fly-icon-chevron-left

 fly-icon-chevron-right

 fly-icon-chevron-up

 fly-icon-chevrons-down

 fly-icon-chevrons-left

 fly-icon-chevrons-right

 fly-icon-chevrons-up

 fly-icon-chrome

 fly-icon-circle

 fly-icon-clipboard

 fly-icon-clock

 fly-icon-cloud

 fly-icon-cloud-drizzle

 fly-icon-cloud-lightning

 fly-icon-cloud-off

 fly-icon-cloud-rain

 fly-icon-cloud-snow

 fly-icon-code

 fly-icon-codepen

 fly-icon-command

 fly-icon-compass

 fly-icon-copy

 fly-icon-corner-down-left

 fly-icon-corner-down-right

 fly-icon-corner-left-down

 fly-icon-corner-left-up

 fly-icon-corner-right-down

 fly-icon-corner-right-up

 fly-icon-corner-up-left

 fly-icon-corner-up-right

 fly-icon-cpu

 fly-icon-credit-card

 fly-icon-crop

 fly-icon-crosshair

 fly-icon-database

 fly-icon-delete

 fly-icon-disc

 fly-icon-dollar-sign

 fly-icon-download

 fly-icon-download-cloud

 fly-icon-droplet

 fly-icon-edit

 fly-icon-edit-2

 fly-icon-edit-3

 fly-icon-external-link

 fly-icon-eye

 fly-icon-eye-off

 fly-icon-facebook

 fly-icon-fast-forward

 fly-icon-feather

 fly-icon-file

 fly-icon-file-minus

 fly-icon-file-plus

 fly-icon-file-text

 fly-icon-film

 fly-icon-filter

 fly-icon-flag

 fly-icon-folder

 fly-icon-folder-minus

 fly-icon-folder-plus

 fly-icon-gift

 fly-icon-git-branch

 fly-icon-git-commit

 fly-icon-git-merge

 fly-icon-git-pull-request

 fly-icon-github

 fly-icon-gitlab

 fly-icon-globe

 fly-icon-grid

 fly-icon-hard-drive

 fly-icon-hash

 fly-icon-headphones

 fly-icon-heart

 fly-icon-help-circle

 fly-icon-home

 fly-icon-image

 fly-icon-inbox

 fly-icon-info

 fly-icon-instagram

 fly-icon-italic

 fly-icon-layers

 fly-icon-layout

 fly-icon-life-buoy

 fly-icon-link

 fly-icon-link-2

 fly-icon-linkedin

 fly-icon-list

 fly-icon-loader

 fly-icon-lock

 fly-icon-log-in

 fly-icon-log-out

 fly-icon-mail

 fly-icon-map

 fly-icon-map-pin

 fly-icon-maximize

 fly-icon-maximize-2

 fly-icon-menu

 fly-icon-message-circle

 fly-icon-message-square

 fly-icon-mic

 fly-icon-mic-off

 fly-icon-minimize

 fly-icon-minimize-2

 fly-icon-minus

 fly-icon-minus-circle

 fly-icon-minus-square

 fly-icon-monitor

 fly-icon-moon

 fly-icon-more-horizontal

 fly-icon-more-vertical

 fly-icon-move

 fly-icon-music

 fly-icon-navigation

 fly-icon-navigation-2

 fly-icon-octagon

 fly-icon-package

 fly-icon-paperclip

 fly-icon-pause

 fly-icon-pause-circle

 fly-icon-percent

 fly-icon-phone

 fly-icon-phone-call

 fly-icon-phone-forwarded

 fly-icon-phone-incoming

 fly-icon-phone-missed

 fly-icon-phone-off

 fly-icon-phone-outgoing

 fly-icon-pie-chart

 fly-icon-play

 fly-icon-play-circle

 fly-icon-plus

 fly-icon-plus-circle

 fly-icon-plus-square

 fly-icon-pocket

 fly-icon-power

 fly-icon-printer

 fly-icon-radio

 fly-icon-refresh-ccw

 fly-icon-refresh-cw

 fly-icon-repeat

 fly-icon-rewind

 fly-icon-rotate-ccw

 fly-icon-rotate-cw

 fly-icon-rss

 fly-icon-save

 fly-icon-scissors

 fly-icon-search

 fly-icon-send

 fly-icon-server

 fly-icon-settings

 fly-icon-share

 fly-icon-share-2

 fly-icon-shield

 fly-icon-shield-off

 fly-icon-shopping-bag

 fly-icon-shopping-cart

 fly-icon-shuffle

 fly-icon-sidebar

 fly-icon-skip-back

 fly-icon-skip-forward

 fly-icon-slack

 fly-icon-slash

 fly-icon-sliders

 fly-icon-smartphone

 fly-icon-speaker

 fly-icon-square

 fly-icon-star1

 fly-icon-stop-circle

 fly-icon-sun

 fly-icon-sunrise

 fly-icon-sunset

 fly-icon-tablet

 fly-icon-tag

 fly-icon-target

 fly-icon-terminal

 fly-icon-thermometer

 fly-icon-thumbs-down

 fly-icon-thumbs-up

 fly-icon-toggle-left

 fly-icon-toggle-right

 fly-icon-trash

 fly-icon-trash-2

 fly-icon-trending-down

 fly-icon-trending-up

 fly-icon-triangle

 fly-icon-truck

 fly-icon-tv

 fly-icon-twitter

 fly-icon-type

 fly-icon-umbrella

 fly-icon-underline

 fly-icon-unlock

 fly-icon-upload

 fly-icon-upload-cloud

 fly-icon-user

 fly-icon-user-check

 fly-icon-user-minus

 fly-icon-user-plus

 fly-icon-user-x

 fly-icon-users

 fly-icon-video

 fly-icon-video-off

 fly-icon-voicemail

 fly-icon-volume

 fly-icon-volume-1

 fly-icon-volume-2

 fly-icon-volume-x

 fly-icon-watch

 fly-icon-wifi

 fly-icon-wifi-off

 fly-icon-wind

 fly-icon-x

 fly-icon-x-circle

 fly-icon-x-square

 fly-icon-youtube

 fly-icon-zap

 fly-icon-zap-off

 fly-icon-zoom-in

 fly-icon-zoom-out
`

let items = data.split(/[\s\n]/ig).filter((item) => {
  return item.length > 0
})
fs.writeFileSync('examples/icon.json', JSON.stringify(items))
