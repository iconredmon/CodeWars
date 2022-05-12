function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if (dolphin) {
      if(sharkDistance/sharkSpeed/2 > pontoonDistance/youSpeed) {
        return 'Alive!'
      } else if (sharkDistance/sharkSpeed/2 < pontoonDistance/youSpeed) {
        return 'Shark Bait!'
      } else if (sharkDistance/sharkSpeed/2 == pontoonDistance/youSpeed) {
        return 'Shark Bait!'
      }
    } else {
      if (sharkDistance/sharkSpeed > pontoonDistance/youSpeed) {
        return 'Alive!'
      } else if (sharkDistance/sharkSpeed < pontoonDistance/youSpeed) {
        return 'Shark Bait!'
      } else if (sharkDistance/sharkSpeed == pontoonDistance/youSpeed) {
        return 'Shark Bait!'
      }
    }
    }