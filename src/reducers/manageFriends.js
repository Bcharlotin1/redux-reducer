

export function manageFriends(state={friends:[]}, action){
    switch(action.type){
        case "ADD_FRIEND":
            return {friends: [...state.friends, action.friend]};
        case "REMOVE_FRIEND":
            console.log(action)
         
            return {friends:  state.friends.filter((friend)=> friend.id != action.id)}
        
        default:
            return state;
    }
}
