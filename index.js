function distanceFromHqInBlocks(someValue) {
    if (someValue > 42 ){ 
        return someValue - 42
 } else if ( someValue < 42) {
    return 42 - someValue
 }
}
function distanceFromHqInFeet(someValue) {
    if (someValue > 42){
        return (someValue - 42) * 264
    } else if (someValue < 42){
        return (42 - someValue) * 264
    }
}
function distanceTravelledInFeet(start,destination){
if (start > destination){
    return (start - destination) * 264
} else if (start < destination){
    return (destination - start) * 264
}
}
function calculatesFarePrice(start,destination){
    let feet = distanceTravelledInFeet(start,destination)
    if (feet < 400){
        return 0
    } if (feet >= 400 && feet <= 2000){
        return (feet - 400) * .02
    } else if (feet > 2000 && feet < 2500){
        return 25
    } else if (feet > 2500){
        return "cannot travel that far"
    }
}