const users = [];

export const fetchUserData = async (req, res) => {
    const userId = await req.params.id;
    if (!userId) return res.json(users);

    const userIdMapping = {};
    users.forEach(user => userIdMapping[user.id] = user)
    console.log(userIdMapping)
    return res.status(200).json(userIdMapping[userId]);
}


export const addUser = async (req, res) => {
    const userData = await req.body;
    users.push(userData);
    return res.status(201).json({ message: "User added", success: true });
}

export const updateUser = async (req, res) => {
    const userId = await req.params.id
    const updatedData = await req.body;
    const userDataIndex = users.findIndex(user => user.id == userId);

    if (userDataIndex !== -1) {
        users[userDataIndex] = { ...users[userDataIndex], ...updatedData };
        return res.status(200).json({ message: "Updated", success: true });
    }
    return res.status(404).json({ message: "User not found" });
}

export const deletUser = async (req, res) => {
    const userId = await req.params.id
    const index = users.findIndex(user => user.id == userId);
   if (index !== -1) {
        users.splice(index, 1); // Sahi splice syntax
        return res.json({ message: "Deleted", success: true });
    }
    return res.status(404).json({ message: "User not found" });
}


