class AdviceAPI{

    static async getAdvice(): Promise<{id: string, advice: string}| null>{
        try{
            return fetch("https://api.adviceslip.com/advice")
            .then(res => res.json())
            .then((data) => {
                    return {id: data.slip.id, advice: data.slip.advice}
                }
            );

        }catch{
            return null;
        }

    }
}

export default AdviceAPI;