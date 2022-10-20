@echo off
set /p "reason=Commit Message:"
git commit -m "%reason%"
ping 192.0.2.2 -n 1 -w 1000 > nul