// Pattern 142: ...

// *****
// *
// *
// *
// *****

#include <stdio.h>

int main()
{
    int n = 5;
    int i, j;

    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            if (i == 1 || i == n || j == 1)
            {
                printf("*");
            }
        }
        printf("\n");
    }
    return 0;
}