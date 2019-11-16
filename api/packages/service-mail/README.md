
# `@chilco/service-mail`

> Send mails from service@vist4.me

## `/mail`

## POST `/mail/send`

<table><tr>
  <td>Param: <code>to</code>, [<code>from</code>], <code>subject</code>, [<code>text</code>], <code>html</code></td>
</tr></table>

```
curl http://localhost:8000/send -d '{ "to": "ttt@jneidel.com", "html": "<p>ok</p>", "text": "this is plain text", "subject": "test mail" }' -H "Content-Type: application/json"
```

## POST `/mail/confirmation`

<table><tr>
  <td>Param: <code>to</code>, [<code>from</code>], [<code>subject</code>], <code>firstname</code>, <code>confirmUrl</code></td>
</tr></table>

```
curl http://localhost:8000/confirmation -d '{ "to": "confirm@jneidel.com", "firstname": "Jonathan", "confirmUrl": "https://duck.com" }' -H "Content-Type: application/json"
```

## Templates

Templates have to be downloaded from mailchip before they can be used here: 

```sh
npm run templates
```

