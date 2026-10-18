function anagram()
{
    let s1="silent"
    let s2="listen"
    if(s1.length!==s2.length)
    {
        return false;
    }
    let map={}
    for(let i=0;i<s1.length;i++)
    {
        map[s1.charAt(i)]=(map[s.charAt(i)],0)+1;
    }
    for(let ch of s2)
    {
        if(!map[ch])
        {
            return false
        }
        map[ch]--;
    }
    return true;

}
console.log(anagram())