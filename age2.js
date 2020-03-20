// alert('hello');
function age()
{
var birthyr=prompt('enter your birthyear,friend?');
var aid=(2020-birthyr)*365;
var h1=document.createElement('h1');
var ans=document.createTextNode('You are ' + aid + ' days old');
h1.setAttribute('id','age');
h1.appendChild(ans);
document.getElementById('flex-box-result').appendChild(h1);

}

function reset()
{
    document.getElementById('age').remove();
    
}
