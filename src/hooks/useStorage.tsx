import AsyncStorage from "@react-native-async-storage/async-storage";


const useStorage= () => {
  
    const getItem = async (key) => {
        try{
            const passwords = await AsyncStorage.getItem(key)
            return JSON.parse(passwords)

        }catch(error){
            console.log("erro ao buscar", error)
        
        return[0]
        }
    

    }

    const saveItem = async (key: string, value: string) => {
        try {
          let passwords = await getItem(key) || []; 
          passwords.push(value);
          await AsyncStorage.setItem(key, JSON.stringify(passwords));
        } catch (error) {
          console.log("Erro ao salvar", error);
        }
      };
      

      const removeItem = async (key, item) => {
        try {
          let passwords = await getItem(key);
          let myPasswords = passwords.filter(password => password !== item);
          await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
          return myPasswords; // Retornar o array atualizado após a remoção
        } catch (error) {
          console.log("Erro ao deletar", error);
        }
      };
      

    return {
        getItem,saveItem, removeItem
    }
}

export default useStorage