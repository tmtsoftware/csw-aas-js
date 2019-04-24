#!/usr/bin/env bash

script_name=$0
js_dir="$( cd "$(dirname "$0")" || exit ; pwd -P )"

run() {
    case "$1" in
        start)
            clean_install "$js_dir"
            clean_install "$js_dir"/config

            cd "$js_dir" && ls -la && npm run startConfig
        ;;
        stop)
            cd "$js_dir" && npm run stopConfig
        ;;
        *)
            echo "[ERROR] Please use start or stop as first argument, find usage below: "
            usage
        ;;
    esac
}

clean_install() {
    local wd=$1

    rm -rf "$wd"/node_modules
    rm -rf "$wd"/package-lock.json
    cd "$wd" && npm install
}

usage() {
    echo
    echo -e "usage: $script_name COMMAND"

    echo
    echo "Commands:"
    echo "  start      Starts config server"
    echo "  stop       Stops config server"
    exit 1
}

run "$@"
