### Alunos 
[André Da Silva Aquilau](https://github.com/AndreAquilau)<br>
[Isabelly Christina Ferreira](https://github.com/isabelly46)<br>
[miguel Arcângelo Martins Pereira Junior/Pleno](https://github.com/miguelarcjr)<br>

### Coffee-Lang
<p>
O coffe-lang é uma linguagem que é compilada pelo TS-Node-DEV, pacote que roda <br>
typescript direto no Node sem precisar compilar para JavaScript.
</p>
<p>
Para desenvolver o compilador usamos o pacote fs, SystemFile do NodeJS, o código <br>
é escrito em um arquivo .coffe, fizemos algunas mudanças no typescript, para <br>
explicar como funciona a complilação de uma linguagem.
</p>

### Sintaxe .coffe
<table>
    <thead>
        <th>
            Sintaxe coffe
        </th>
        <th>
            Sintaxe Compilada para .ts
        </th>
        <th>
            DataType
        </th>
    </thead>
    <tbody>
        <tr>
            <td>stin</td>
            <td>let</td>
            <td>Store Input</td>
        </tr>
        <tr>
            <td>sys</td>
            <td>console</td>
            <td>System Prompt</td>
        </tr>
        <tr>
            <td>sys.print</td>
            <td>console.log</td>
            <td>System Prompt Write</td>
        </tr>
        <tr>
            <td>:=</td>
            <td>=</td>
            <td>Assignment</td>
        </tr>
    </tbody>

</table>
<strong>
Para tudo funcionar o código deve ser escrito no arquivo ./src/index.coffe
</strong>

### Exemplo
```.coffe
//exemplo index.coffe

    stin teste := 'teste';

    sys.print(teste);
```

### Build Watch 
```bash
bash coffe.sh
```
### Dependência
[NodeJS](https://nodejs.org/en/)


![COFFEE-LANG](https://img.shields.io/badge/-Coffee%20Lang-944058?style=flat-square&logo=coffee&logoColor=white)