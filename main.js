const go(direction, mph) = => {
    console.log(`The car is moving ${direction} at ${mph} mph`)
}

function go(direction, mph) {
    console.log("The car is moving", direction, "at" mph, "mph");
}
go("forward", 10);
go("backward", 36);