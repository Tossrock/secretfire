import os
import sys
import subprocess

def copy_static(staticdir):
    subprocess.call(['cp', '-R', 'static', staticdir])
    pass

def restart_server():
    pass

def main():
    copy_static()
    restart_server()
    return 0

if __name__=="__main__":
    sys.exit(main())
