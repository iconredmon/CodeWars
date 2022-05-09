function friend(friends){
    //your code here
let ans = []
for (i=0; i<friends.length;i++) {
    if (friends[i].length == 4) {
        ans.push(friends[i])
    }
}

return ans

} 