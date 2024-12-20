<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Events\TestWebsocketEvent;

Route::get('/', function () {
    return Inertia::render('Test');
});

Route::get('/set', function(){
    event(new TestWebsocketEvent([

        'data' => 'This is test data 1',
        'another_data' => 'another_data'
    ]));

    return response()->json([
        'data' => 'set'], 200);
});


