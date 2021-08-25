a1=[['-','-','-'],['-','-','-'],['-','-','-']]
c=0
winner1=0
winner2=0
function insert(i,j)
{   if(c<9 && winner1==0 && winner2==0)
    {
        s="box"+String(i)+String(j)
        if(a1[i][j]=='-')
        {   console.log(s)
            if(c%2==0)
            {
                a1[i][j]='X'
                document.getElementById(s).innerHTML="X"
                document.getElementById("player").innerHTML="Player 2"
                if(i==0)
                {
                    if(a1[i+1][j]=='X' && a1[i+2][j]=='X')
                    {
                        winner1+=1;
                    }
                }
                else if(i==2)
                {
                    if(a1[i-1][j]=='X' && a1[i-2][j]=='X')
                    {
                        winner1+=1;
                    }
                }
                else
                {
                    if(a1[i-1][j]=='X' && a1[i+1][j]=='X')
                    {
                        winner1+=1
                    }
                }
                if(j==0)
                {
                    if(a1[i][j+1]=='X' && a1[i][j+2]=='X')
                    {
                        winner1+=1;
                    }
                }
                else if(j==2)
                {
                    if(a1[i][j-1]=='X' && a1[i][j-2]=='X')
                    {
                        winner1+=1;
                    }
                }
                else
                {
                    if(a1[i][j-1]=='X' && a1[i][j+1]=='X')
                    {
                        winner1+=1
                    }
                }  
                if(i==j)
                {
                    if(i==0)
                    {
                        if(a1[i+1][j+1]=='X' && a1[i+2][j+2]=='X')
                        {
                            winner1+=1
                        }
                    }
                    else if(i==2)
                    {
                        if(a1[i-1][j-1]=='X' && a1[i-2][j-2]=='X')
                        {
                            winner1+=1
                        }
                    }
                    else
                    {
                        if(a1[i-1][j-1]=='X' && a1[i+1][j+1]=='X')
                        {
                            winner1+=1
                        }
                        if(a1[i-1][j+1]=='X' && a1[i+1][j-1]=='X')
                        winner1+=1
                    }
                }
                if(i==0 && j==2 && a1[i+1][j-1]=='X' && a1[i+2][j-2]=='X')
                winner1+=1
                if(i==2 && j==0 && a1[i-1][j+1]=='X' && a1[i-2][j+2]=='X')
                winner1+=1
                if(winner1>0)
                {
                    document.getElementById("player").innerHTML="Game Over"
                }   
            }
            else
            {
                a1[i][j]='O'
                document.getElementById(s).innerHTML="O"
                document.getElementById("player").innerHTML="Player 1"
                if(i==0)
                {
                    if(a1[i+1][j]=='O' && a1[i+2][j]=='O')
                    {
                        winner2+=1;
                    }
                }
                else if(i==2)
                {
                    if(a1[i-1][j]=='O' && a1[i-2][j]=='O')
                    {
                        winner2+=1;
                    }
                }
                else
                {
                    if(a1[i-1][j]=='O' && a1[i+1][j]=='O')
                    {
                        winner2+=1
                    }
                }
                if(j==0)
                {
                    if(a1[i][j+1]=='O' && a1[i][j+2]=='O')
                    {
                        winner2+=1;
                    }
                }
                else if(j==2)
                {
                    if(a1[i][j-1]=='O' && a1[i][j-2]=='O')
                    {
                        winner2+=1;
                    }
                }
                else
                {
                    if(a1[i][j-1]=='O' && a1[i][j+1]=='O')
                    {
                        winner2+=1
                    }
                }  
                if(i==j)
                {
                    if(i==0)
                    {
                        if(a1[i+1][j+1]=='O' && a1[i+2][j+2]=='O')
                        {
                            winner2+=1
                        }
                    }
                    else if(i==2)
                    {
                        if(a1[i-1][j-1]=='O' && a1[i-2][j-2]=='O')
                        {
                            winner2+=1
                        }
                    }
                    else
                    {
                        if(a1[i-1][j-1]=='O' && a1[i+1][j+1]=='O')
                        {
                            winner2+=1
                        }
                        if(a1[i-1][j+1]=='O' && a1[i+1][j-1]=='O')
                        {
                            winner2+=1
                        }
                    }
                }
                if(i==0 && j==2 && a1[i+1][j-1]=='O' && a1[i+2][j-2]=='O')
                winner2+=1
                if(i==2 && j==0 && a1[i-1][j+1]=='O' && a1[i-2][j+2]=='O')
                winner2+=1
            }
            c+=1
        }
    }
    if(c==9 || winner1>0 || winner2>0)
    {
        document.getElementById("player").innerHTML="Game Over"
        if(winner1>0)
        {
            document.getElementById("result").innerHTML="Result: <br> Player 1 Won"
        }
        else if(winner2>0)
        {
            document.getElementById("result").innerHTML="Result: <br> Player 2 Won"
        }
        else
        {
            document.getElementById("result").innerHTML="Result: <br> Match Drawm"
        }
    }
}