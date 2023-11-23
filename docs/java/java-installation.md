
# Java Installation

# Install Java 17 on Windows 10

## Download Java 17

- Go to [Java SE Downloads](https://www.oracle.com/java/technologies/downloads/#java17-windows) page.
- Click on the **JDK Download** button.
- Click on the **Accept License Agreement** radio button.
- Click on the **jdk-17_windows-x64_bin.exe** link to download the JDK installer. 

## Install Java 17

- Double click on the **jdk-17_windows-x64_bin.exe** file to start the installation.
- Click on the **Next** button.
- Click on the **Change...** button to change the installation directory.
- Select the installation directory and click on the **OK** button.
- Click on the **Next** button.
- Click on the **Close** button.

## Set Java 17 Environment Variables

- Right click on the **This PC** icon and select **Properties**.
- Click on the **Advanced system settings** link.
- Click on the **Environment Variables...** button.
- Click on the **New...** button under the **System variables** section.
- Enter **JAVA_HOME** in the **Variable name** field.
- Enter **C:\Program Files\Java\jdk-17** in the **Variable value** field.
- Click on the **OK** button.
- Select the **Path** variable under the **System variables** section and click on the **Edit...** button.
- Click on the **New** button.
- Enter **%JAVA_HOME%\bin** in the **Variable value** field.  
- Click on the **OK** button.

## Verify Java 17 Installation

- Open the **Command Prompt**.
- Enter the following command to verify the Java installation.
```shell
java -version
```
- You should see the following output.
```shell
java version "17" 2021-09-14 LTS
Java(TM) SE Runtime Environment (build 17+35-LTS-2724)  
Java HotSpot(TM) 64-Bit Server VM (build 17+35-LTS-2724, mixed mode, sharing)
```

# Install Java 17 on macOS

## Download Java 17

- Go to [Java SE Downloads](https://www.oracle.com/java/technologies/downloads/#java17-mac) page.
- Click on the **JDK Download** button.
- Click on the **Accept License Agreement** radio button.
- Click on the **jdk-17_macos-x64_bin.dmg** link to download the JDK installer.

## Install Java 17

- Double click on the **jdk-17_macos-x64_bin.dmg** file to start the installation.
- Double click on the **JDK 17.pkg** file to start the installation.
- Click on the **Continue** button.
- Click on the **Continue** button.

## Set Java 17 Environment Variables

- Open the **Terminal**.
- Enter the following command to open the **.bash_profile** file.
```shell
nano ~/.bash_profile
```
- Enter the following command in the **.bash_profile** file.
```shell
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH
```
- Press **Ctrl + X** to exit the **.bash_profile** file.
- Press **Y** to save the changes.
- Press **Enter** to confirm the file name.

## Verify Java 17 Installation

- Open the **Terminal**.
- Enter the following command to verify the Java installation.

```shell
java -version
```
- You should see the following output.
```shell
java version "17" 2021-09-14 LTS
Java(TM) SE Runtime Environment (build 17+35-LTS-2724)
Java HotSpot(TM) 64-Bit Server VM (build 17+35-LTS-2724, mixed mode, sharing)
```

# Install Java 17 on Ubuntu

## Download Java 17

- Go to [Java SE Downloads](https://www.oracle.com/java/technologies/downloads/#java17-linux) page.
- Click on the **JDK Download** button.
- Click on the **Accept License Agreement** radio button.
- Click on the **jdk-17_linux-x64_bin.deb** link to download the JDK installer.


## Install Java 17

- Open the **Terminal**.
- Enter the following command to install the **wget** package.
```shell
sudo apt install wget
```
- Enter the following command to download the JDK installer.
```shell
sudo wget https://download.oracle.com/java/17/latest/jdk-17_linux-x64_bin.deb
```

- Enter the following command to install the JDK.
```shell
sudo apt install ./jdk-17_linux-x64_bin.deb
```

## Set Java 17 Environment Variables

- Enter the following command to open the **.bashrc** file.
```shell
nano ~/.bashrc
```

- Enter the following command in the **.bashrc** file.
```shell
export JAVA_HOME=/usr/lib/jvm/jdk-17
export PATH=$JAVA_HOME/bin:$PATH
```

- Press **Ctrl + X** to exit the **.bashrc** file.
- Press **Y** to save the changes.
- Press **Enter** to confirm the file name.

## Verify Java 17 Installation

- Open the **Terminal**.
- Enter the following command to verify the Java installation.
```shell
$ java -version
```
- You should see the following output.
```shell
java version "17" 2021-09-14 LTS
Java(TM) SE Runtime Environment (build 17+35-LTS-2724)
Java HotSpot(TM) 64-Bit Server VM (build 17+35-LTS-2724, mixed mode, sharing)
```

