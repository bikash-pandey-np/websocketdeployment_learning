<?php

use Illuminate\Support\Facades\Broadcast;


//private channels are defined here where client gets subscribed
Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

