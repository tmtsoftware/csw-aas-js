#!/usr/bin/env bash

script_name=$0
js_dir=$(dirname "$0")

function run {
    case "$1" in
        start)
            cd "$js_dir" && npm run config
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

function usage {
    echo
    echo -e "usage: $script_name COMMAND"

    echo
    echo "Commands:"
    echo "  start      Starts config server"
    echo "  stop       Stops config server"
    exit 1
}

run "$@"
