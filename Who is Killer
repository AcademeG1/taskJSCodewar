//Кто убийца?
//Несколько человек были убиты!
//Вам удалось сузить круг подозреваемых до нескольких человек. К счастью, вы знаете каждого человека, которого эти подозреваемые видели в день убийств.

//Задание.
//Предоставляется словарь со всеми именами подозреваемых и всех, кого они видели в тот день, который может выглядеть так:

//{'James': ['Jacob', 'Bill', 'Lucas'],
// 'Johnny': ['David', 'Kyle', 'Lucas'],
// 'Peter': ['Lucy', 'Kyle']}
//а также список имен погибших людей:

//['Lucas', 'Bill']
//верните имя одного убийцы, в нашем случае'James', потому что он единственный человек, который видел оба 'Lucas'и 'Bill'

function killer(suspectInfo, dead) {
    let killerName = ''
    let countDead = 0
    for ([name, massName] of Object.entries(suspectInfo)){
        let count = 0
        dead.forEach(dea => {
            count = massName.includes(dea) ? count+1 : count
        })
        if (count > countDead) {
            countDead = count
            killerName = name
        }
    }
    return killerName
}
