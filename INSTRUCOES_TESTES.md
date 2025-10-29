# 🚀 GUIA DE EXECUÇÃO - TESTES AUTOMATIZADOS PAMELLA OLIVEIRA

## 📋 RESUMO DOS TESTES
Testes automatizados com Selenium para o cadastro da Pamella Oliveira, incluindo os 5 testes obrigatórios para apresentação acadêmica.

### Dados do Teste:
- **Nome:** Pamella Oliveira
- **Telefone:** 8199999-9999
- **Email:** pamela@gmail.com
- **Senha:** nininha123
- **SMS:** 111111

## 🎯 TESTES IMPLEMENTADOS

### ✅ 1. `send_keys()` e `clear()` - Campo Nome
- Preenche o campo nome com "Pamella Oliveira"
- Limpa o campo usando `clear()`
- Verifica se os valores foram inseridos corretamente

### ✅ 2. `get_attribute()` - Atributos dos Campos
- Obtém placeholders dos campos (nome, telefone, email)
- Verifica tipos dos inputs (text, tel, email)
- Valida atributos dos elementos

### ✅ 3. `is_selected()` - Estado dos Elementos
- Verifica se botões estão habilitados
- Confirma visibilidade dos campos
- Testa clicabilidade dos elementos

### ✅ 4. `current_url` - Redirecionamento
- Verifica URL inicial (register.html)
- Preenche formulário completo
- Confirma redirecionamento para sms-confirmation.html

### ✅ 5. `ActionChains` - Hover e Interações
- Executa hover no botão de cadastro
- Hover no link de login
- Testa interação com toggle de senha

### ✅ EXTRA: Fluxo Completo de Cadastro
- Preenche todos os campos do formulário
- Executa cadastro completo
- Valida dados inseridos

## 🛠️ COMO EXECUTAR OS TESTES

### OPÇÃO 1: Instalação Completa (Recomendada)

#### 1. Instalar Python
1. Acesse: https://www.python.org/downloads/
2. Baixe a versão mais recente
3. Durante instalação, marque: **"Add Python to PATH"**

#### 2. Instalar Dependências
```powershell
# No PowerShell, navegue até a pasta do projeto
cd "c:\Users\pedro\Desktop\arquitetura atividade"

# Instale as dependências
pip install -r requirements.txt
```

#### 3. Executar Testes
```powershell
# Opção A: Executar todos os testes
python test_cadastro_pamella.py

# Opção B: Usar o script executor
python executar_testes.py

# Opção C: Executar com verbose
python -m unittest test_cadastro_pamella.py -v
```

### OPÇÃO 2: Script de Instalação Automática

#### 1. Executar Instalador
```powershell
# Execute o script batch
.\instalar_python_e_testes.bat
```

#### 2. Após instalação, execute:
```powershell
python test_cadastro_pamella.py
```

### OPÇÃO 3: Validação Rápida (Sem Python)

#### 1. Validar Arquivos
```powershell
node validar_testes.js
```

## 📹 PARA APRESENTAÇÃO

### Estrutura da Apresentação (10 minutos)

#### 1. Introdução (1 minuto)
- Apresente o projeto de testes automatizados
- Mostre os 5 tipos de testes obrigatórios
- Explique os dados usados (Pamella Oliveira)

#### 2. Demonstração dos Testes (5 minutos)
- Execute os testes ao vivo
- Mostre o Chrome abrindo automaticamente
- Grave a tela durante a execução

#### 3. Explicação do Código (3 minutos)
- Mostre cada função de teste
- Explique os comandos Selenium usados
- Demonstre os assertions e validações

#### 4. Conclusão (1 minuto)
- Resuma os resultados
- Mostre que todos os testes passaram
- Compare com o design do Figma

### Dicas para Gravação

#### Configurar Tela
- Maximizar janela do PowerShell
- Usar fonte grande e legível
- Gravar em 1080p se possível

#### Comentários Durante Execução
- Explique cada etapa dos testes
- Comente sobre os 5 tipos obrigatórios
- Destaque os redirecionamentos e validações

#### Mostrar Resultados
- Pause para mostrar resultados no terminal
- Destaque o relatório final de sucesso
- Demonstre o redirecionamento para SMS

## 🚨 SOLUÇÃO DE PROBLEMAS

### Python não encontrado
```powershell
# Verificar se está no PATH
python --version

# Se não funcionar, use:
py -m pip install selenium webdriver-manager requests
```

### Chrome não abre
- Verifique se Chrome está instalado
- Atualize o Chrome para versão mais recente
- O webdriver-manager baixa o ChromeDriver automaticamente

### Servidor não responde
```powershell
# Verificar se servidor está rodando
curl http://localhost:5174/register.html

# Se não estiver, execute:
npm run dev
```

### Testes falham
- Verifique se o servidor está rodando
- Confirme que register.html existe
- Verifique se os IDs dos elementos estão corretos

## 📊 ESTRUTURA DOS ARQUIVOS

```
c:\Users\pedro\Desktop\arquitetura atividade\
├── test_cadastro_pamella.py      # 🎯 Testes principais (9.5KB)
├── executar_testes.py             # 🚀 Script executor (3.9KB)
├── requirements.txt                # 📦 Dependências (58 bytes)
├── validar_testes.js             # ✅ Validador (2.1KB)
├── instalar_python_e_testes.bat   # 🛠️ Instalador (1.2KB)
├── INSTRUCOES_TESTES.md          # 📖 Este guia
├── register.html                   # 📄 Página de cadastro
├── sms-confirmation.html           # 📱 Página de confirmação
└── [outros arquivos do projeto]
```

## 🎉 RESULTADO ESPERADO

Ao executar com sucesso, você verá:

```
🚀 INICIANDO TESTES - CADASTRO PAMELLA OLIVEIRA
=================================================
📋 Dados do teste:
   Nome: Pamella Oliveira
   Telefone: 8199999-9999
   Email: pamela@gmail.com
   Senha: nininha123
   SMS: 111111
=================================================

🧪 TESTE 1: send_keys() e clear() - Campo Nome
✅ send_keys(): 'Pamella Oliveira' inserido com sucesso
✅ clear(): Campo limpo com sucesso

🧪 TESTE 2: get_attribute() - Atributos dos campos
✅ Campo Nome - Placeholder: 'Digite seu nome completo', Tipo: 'text'
✅ Campo Telefone - Placeholder: 'Informe seu telefone', Tipo: 'tel'
✅ Campo Email - Placeholder: 'Digite seu e-mail', Tipo: 'email'

[... mais testes ...]

📊 RELATÓRIO FINAL:
✅ Testes executados: 6
❌ Falhas: 0
⚠️  Erros: 0
🎉 TODOS OS TESTES PASSARAM!
```

---

**✅ PRONTO PARA APRESENTAÇÃO!**

Boa sorte na sua apresentação! 🚀