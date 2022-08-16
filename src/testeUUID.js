


todo = "76924819-25e9-450a-a6b2-e99ffa721831"

function checkIfValidUUID(x) {
    // Regular expression to check if string is a valid UUID
    const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    return console.log(regexExp.test(x));
  }


checkIfValidUUID(todo.value)