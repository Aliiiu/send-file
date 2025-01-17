#include <stdio.h>
#include <stdlib.h>
#include <Windows.h>
#include "icservice.h"
#include "wlanhost.h"

extern WCHAR *adapter_id;

int main(int argc, char **argv)
{
    printf("Starting WiFi Hotspot..\n");
    start_wifi_hotspot("TITAN_WORLD", "im_a_titan");

    Sleep(1500);

    printf("Share connection...\n");

    share_connection(adapter_id);

    printf("Press any key to stop Wifi Hotspot\n");
    getchar();

    stop_wifi_hotspot();

    printf("bye\n");

    return EXIT_SUCCESS;
}