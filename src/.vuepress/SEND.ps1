# 上传 ZIP 文件到服务器
scp -i $env:USERPROFILE\.ssh\id_ed25519 .\dist.zip ubuntu@123.207.71.94:/home/shared/

# 触发 Jenkins 任务
$jenkinsUrl = "http://123.207.71.94:8080/job/blog-watcher/build"
$buildToken = "AUTO_DEPLOY"
$user = "admin"
$apiToken = "1165a32421e0e6859697582906d78a1152"

$auth = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("${user}:${apiToken}"))
$headers = @{
    Authorization = "Basic $auth"
}
Invoke-WebRequest -Uri "${jenkinsUrl}?token=${buildToken}" `
    -Method POST -Headers $headers -UseBasicParsing

# 按 Enter 键关闭窗口
Write-Host "一键打包发送部署完成，我真牛逼！"