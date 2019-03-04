const fs = require('fs')
let data = `
fly-icon-activity

fly-icon-airplay

fly-icon-alert-circle

fly-icon-align-center

fly-icon-align-justify

fly-icon-align-left

fly-icon-align-right

fly-icon-anchor

fly-icon-archive

fly-icon-arrow-down

fly-icon-arrow-left

fly-icon-arrow-right

fly-icon-arrow-up

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

fly-icon-book-open

fly-icon-calendar

fly-icon-camera

fly-icon-camera-off

fly-icon-check

fly-icon-chevron-down

fly-icon-chevron-left

fly-icon-chevron-right

fly-icon-chevron-up

fly-icon-chevrons-down

fly-icon-chevrons-left

fly-icon-chevrons-right

fly-icon-chevrons-up

fly-icon-chrome

fly-icon-clock

fly-icon-cloud

fly-icon-cloud-lightning

fly-icon-cloud-off

fly-icon-cloud-rain

fly-icon-cloud-snow

fly-icon-code

fly-icon-command

fly-icon-copy

fly-icon-corner-down-left

fly-icon-corner-down-right

fly-icon-corner-left-down

fly-icon-corner-left-up

fly-icon-corner-right-down

fly-icon-corner-right-up

fly-icon-corner-up-left

fly-icon-corner-up-right

fly-icon-credit-card

fly-icon-crop

fly-icon-crosshair

fly-icon-dollar-sign

fly-icon-download

fly-icon-download-cloud

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

fly-icon-grid

fly-icon-hash

fly-icon-headphones

fly-icon-heart

fly-icon-help-circle

fly-icon-image

fly-icon-info

fly-icon-instagram

fly-icon-italic

fly-icon-layers

fly-icon-layout

fly-icon-link

fly-icon-loader

fly-icon-lock

fly-icon-mail

fly-icon-map-pin

fly-icon-minus

fly-icon-monitor

fly-icon-more-horizontal

fly-icon-more-vertical

fly-icon-move

fly-icon-paperclip

fly-icon-pause

fly-icon-plus

fly-icon-power

fly-icon-search

fly-icon-settings

fly-icon-share-2

fly-icon-sidebar

fly-icon-skip-back

fly-icon-skip-forward

fly-icon-trash-2

fly-icon-trending-down

fly-icon-trending-up

fly-icon-triangle

fly-icon-truck

fly-icon-twitter

fly-icon-upload-cloud

fly-icon-user

fly-icon-volume

fly-icon-volume-1

fly-icon-volume-2

fly-icon-volume-x

fly-icon-x

fly-icon-x-circle

fly-icon-zoom-in

fly-icon-zoom-out
`

let items = data.split(/[\s\n]/ig).filter((item) => {
  return item.length > 0
})
fs.writeFileSync('examples/icon.json', JSON.stringify(items))
