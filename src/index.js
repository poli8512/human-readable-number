module.exports = function toReadable(number){

    if(number.toString()=='0'){
        return 'zero'
    }
    let stringNumber=''

    let midNum= number
    let humanMap= new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine'],
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'nineteen'],
        [20, 'twenty'],
        [30, 'thirty'],
        [40, 'forty'],
        [50, 'fifty'],
        [60, 'sixty'],
        [70, 'seventy'],
        [80, 'eighty'],
        [90, 'ninety']
    ])
    const hum=()=>{

        if(midNum.toString().length==4){
            stringNumber+= humanMap.get(+midNum.toString()[0])+' thousant'
            midNum = midNum.toString().substr(1)
        }
        if(midNum.toString().length==3){
            stringNumber+= stringNumber
                ?' '+ humanMap.get(+midNum.toString()[0])+' hundred'
                :humanMap.get(+midNum.toString()[0])+' hundred'
            midNum = midNum.toString().substr(1)
            if(midNum.toString()=='00'){
                return stringNumber
            }
        }
        if(midNum.toString().length==2){
            if(midNum.toString()[0]+'0'<20){
                stringNumber+= stringNumber
                    ?' '+humanMap.get(+midNum)
                    :humanMap.get(+midNum)
                return stringNumber
            }else{
                stringNumber+= stringNumber
                    ?' '+humanMap.get(+(midNum.toString()[0]+'0'))
                    :humanMap.get(+(midNum.toString()[0]+'0'))
                midNum = midNum.toString().substr(1)
            }

        }
        if(midNum.toString().length==1){
            if(!+midNum){
                return stringNumber
            }
            stringNumber+= stringNumber? ' '+humanMap.get(+midNum):humanMap.get(+midNum)
            return stringNumber
        }
        if(midNum.toString().length>1){
            stringNumber +=' '
            hum()
        }

    }
    hum()
    return stringNumber
}
