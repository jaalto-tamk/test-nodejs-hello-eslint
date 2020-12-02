// An Eslint example file

function plus(a,b)
{
}

function isNegative(value)
{
  if (value < 0)
     return true
  else
     return false
}

function message(value)
{
	console.log(value)
}

var x = "1"

if (x = 1)
{
    message("Hi")
}

var str = "ip:  192.168.1.1"
var re = /ip:  ([\d.]+)/i

if (m = re.exec(str))
{
  let ip = m[1]
  console.log(ip)
}

// End of file
