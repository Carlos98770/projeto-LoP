#include <iostream>

using namespace std;
int main(){
    int num,n1,n2,n3,n4,n5;
    cout << "digite um numero de 5 digitos; ";
    cin >> num;


    n1 = (num/10000);
    n2 = (num/1000)%10;
    n3 = (num/100)%10;
    n4 = (num/10)%10;
    n5 = (num%10);

    cout << endl;

    cout << "numero separado por cada digito: " << endl;
    cout << n1 << "   ";
    cout << n2 << "   ";
    cout << n3 << "   ";
    cout << n4 << "   ";
    cout << n5;


    return 0;
}
